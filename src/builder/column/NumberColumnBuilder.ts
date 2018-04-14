import {extent} from 'd3-array';
import {EAdvancedSortMethod, ESortMethod, INumberColumnDesc} from '../../model';
import ColumnBuilder from './ColumnBuilder';

export default class NumberColumnBuilder extends ColumnBuilder<INumberColumnDesc> {

  constructor(column: string) {
    super('number', column);
  }

  /**
   * defines the mapping for this number column to normalize the data
   * @param {"linear" | "sqrt" | "pow1.1" | "pow2" | "pow3"} type mapping type
   * @param {[number , number]} domain input data domain [min, max]
   * @param {[number , number]} range optional output domain [0, 1]
   */
  mapping(type: 'linear' | 'sqrt' | 'pow1.1' | 'pow2' | 'pow3', domain: [number, number], range?: [number, number]) {
    if (type === 'linear') {
      this.desc.domain = domain;
      if (range) {
        this.desc.range = range;
      }
      return;
    }
    this.desc.map = {
      type, domain, range: range || [0, 1]
    };
    return this;
  }

  /**
   * defines a script to normalize the data, see ScriptedMappingFunction for details
   * @param {string} code the code to execute
   * @param {[number , number]} domain the input data domain [min, max]
   */
  scripted(code: string, domain: [number, number]) {
    this.desc.map = {domain, code, type: 'script'};
    return this;
  }


  /**
   * @inheritDoc
   * @param {string[] | number} labels labels to use for each array item or the expected length of an value
   * @param {EAdvancedSortMethod} sort sorting criteria when sorting by this column
   */
  asArray(labels?: string[] | number, sort?: EAdvancedSortMethod) {
    if (sort) {
      (<any>this.desc).sort = sort;
    }
    return super.asArray(labels);
  }

  /**
   * @inheritDoc
   * @param {EAdvancedSortMethod} sort sorting criteria when sorting by this column
   */
  asMap(sort?: EAdvancedSortMethod) {
    if (sort) {
      (<any>this.desc).sort = sort;
    }
    return super.asMap();
  }

  /**
   * converts type to a boxplot column type
   * @param {ESortMethod} sort sorting criteria when sorting by this column
   */
  asBoxPlot(sort?: ESortMethod) {
    if (sort) {
      (<any>this.desc).sort = sort;
    }
    this.desc.type = 'boxplot';
    return this;
  }


  build(data: any[]): INumberColumnDesc {
    if (!this.desc.map && !this.desc.domain) {
      // derive domain
      this.mapping('linear', <[number, number]>extent(data, (d) => <number>d[(<any>this.desc).column]));
    } else {
      const d = this.desc.domain || this.desc.map!.domain;
      if (isNaN(d[0]) || isNaN(d[1])) {
        const ext = <[number, number]>extent(data, (d) => <number>d[(<any>this.desc).column]);
        if (isNaN(d[0])) {
          d[0] = ext[0];
        }
        if (isNaN(d[1])) {
          d[1] = ext[1];
        }
      }
    }
    return super.build(data);
  }
}

/**
 * builds numerical column builder
 * @param {string} column column which contains the associated data
 * @param {[number , number]} domain domain (min, max) of this column
 * @returns {NumberColumnBuilder}
 */
export function buildNumberColumn(column: string, domain?: [number, number]) {
  const r = new NumberColumnBuilder(column);
  if (domain) {
    r.mapping('linear', domain);
  }
  return r;
}
