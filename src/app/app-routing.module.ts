import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SendTransactionComponent } from './components/send-transaction/send-transaction.component';
import { ConfirmSecretComponent } from './components/sign-up/confirm-secret/confirm-secret.component';
import { CreateWalletComponent } from './components/sign-up/create-wallet/create-wallet.component';
import { RegisterComponent } from './components/sign-up/register/register.component';
import { TwelvePhraseComponent } from './components/sign-up/twelve-phrase/twelve-phrase.component';
import { AuthGuard } from './route-guard/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'send-transaction',
    component: SendTransactionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
