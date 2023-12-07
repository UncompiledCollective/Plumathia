export interface IfcSourceInterface {
  numbers: Array<number>,
  sources: Array<string>
}
export interface IfcSourceInterfaceSimpler {
  numbers: [{
    number: number,
    source:string
  }]
}
export class Source {
  constructor(public number: number, public source: string, public position:number) {}
}
