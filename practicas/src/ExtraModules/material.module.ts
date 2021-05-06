import { NgModule } from '@angular/core'

import {MatGridListModule} from '@angular/material/grid-list'
import {MatTooltipModule} from '@angular/material/tooltip'

@NgModule({
    imports:[
        MatGridListModule,
        MatTooltipModule
    ],
    exports:[
        MatGridListModule,
        MatGridListModule
    ]

})

export class MaterialModule{}