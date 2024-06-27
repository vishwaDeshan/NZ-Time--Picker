import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-time-picker-use12-hours',
  template: `
    <div class="time-picker-wrapper">
      <label for="timePicker">Start Time</label>
      <nz-time-picker
        id="timePicker"
        [(ngModel)]="time"
        [nzUse12Hours]="true"
        (ngModelChange)="log($event)"
        nzFormat="h:mm a"
        nzNowText=' '
        nzPlaceHolder="_ _ : _ _  _ _"
        [nzBorderless]="true"
        [nzSuffixIcon]= none
      ></nz-time-picker>
    </div>
  `,
  styles: [
    `
      nz-time-picker{
        margin: 0 8px 12px 0;
      }
      ::ng-deep.ant-picker-input>input {
        color: #22262C !important;
        font-size:16px !important;
        font-weight:400px;
      }
      
      .time-picker-wrapper {
        border: 1px solid #ccc;
        width: 230px;
        height: 58px;
        padding: 7px;
        border-radius: 8px;
        margin:12px
      }

      .time-picker-wrapper label {
        display: block;
        padding-left: 12px;
        margin-bottom: -10px;
        color: #777f8a;
        font-weight: 400;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
      }

      ::ng-deep button{
        background: #C9178D !important;
        width:47px;
        border-radius:8px !important;
        padding-bottom: 5px !important;
        border: 1px solid #C9178D !important;
      }

      ::ng-deep ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      ::ng-deep .ant-time-picker-panel-select-option-selected {
        font-weight: 600;
        background :gray !important;
      }
    `,
  ],
})
export class NzDemoTimePickerUse12HoursComponent {
  time: Date | null = null;

  log(value: Date): void {
    console.log(value);
  }
}
