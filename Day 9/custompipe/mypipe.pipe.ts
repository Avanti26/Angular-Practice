import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name:"summary"
    }
)

export class Mypipe implements PipeTransform
{
    transform(value: any, ...args: any[]) {
       
        if (value == null)
        {
            return null;
        }
    

        let tempvalue = (<string>value);
        return tempvalue.substring(0,10)+" ...";
    }
    

}