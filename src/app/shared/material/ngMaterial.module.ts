import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbAccordionModule} from './accordion/accordion.module';
import {NgbAlertModule} from './alert/alert.module';
import {NgbButtonsModule} from './buttons/buttons.module';
import {NgbCarouselModule} from './carousel/carousel.module';
import {NgbCollapseModule} from './collapse/collapse.module';
import {NgbDatepickerModule} from './datepicker/datepicker.module';
import {NgbDropdownModule} from './dropdown/dropdown.module';
import {NgbModalModule} from './modal/modal.module';
import {NgbNavModule} from './nav/nav.module';
import {NgbPaginationModule} from './pagination/pagination.module';
import {NgbPopoverModule} from './popover/popover.module';
import {NgbProgressbarModule} from './progressbar/progressbar.module';
import {NgbRatingModule} from './rating/rating.module';
import {NgbTimepickerModule} from './timepicker/timepicker.module';
import {NgbToastModule} from './toast/toast.module';
import {NgbTooltipModule} from './tooltip/tooltip.module';
import {NgbTypeaheadModule} from './typeahead/typeahead.module';

@NgModule({
  declarations: [],
  imports: [
    NgModule,
    CommonModule,
    NgbAccordionModule
  ],
  exports: [

  ]
})
export class MaterialModule { }