import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusSort'
})
export class StatusSortPipe implements PipeTransform {

  transform(input,status) {
    if(input !=undefined){

      if(status === "all") {
        return input;
      }
      console.log(status)
      var output=[];
      for(var i=0; i<input.length;i++){
        if(input[i].status === status){
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
