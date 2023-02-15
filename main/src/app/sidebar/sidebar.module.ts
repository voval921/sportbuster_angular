import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {UserboxComponent} from "../shared/signin/userbox/userbox.component";
import {SigninModule} from "../shared/signin/signin.module";
import {LanguageComponent} from "../shared/language/language.component";
import {LanguageModule} from "../shared/language/language.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [ RouterModule, CommonModule, TranslateModule, SigninModule, LanguageModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ],
    entryComponents: [ UserboxComponent, LanguageComponent]
})

export class SidebarModule {}
