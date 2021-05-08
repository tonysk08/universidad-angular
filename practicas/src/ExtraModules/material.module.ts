import { NgModule } from '@angular/core'

import {MatGridListModule} from '@angular/material/grid-list'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatSelectModule} from '@angular/material/select'
import{MatIconModule} from '@angular/material/icon'
import { from } from 'rxjs'


@NgModule({
    imports:[
        MatGridListModule,
        MatTooltipModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule
    ],
    exports:[
        MatGridListModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule
    ]

})

export class MaterialModule{}