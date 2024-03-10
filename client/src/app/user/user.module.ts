import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './hero/search/search.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TestinomialComponent } from './testinomial/testinomial.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [UserComponent, HeroComponent, SearchComponent, HowItWorksComponent, WhyUsComponent, TestinomialComponent, FooterComponent, HeaderComponent],
  imports: [SharedModule],
  exports: [UserComponent],
})
export class UserModule {}
