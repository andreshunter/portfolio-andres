import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ThemeService {

  isDark = signal(true);
  constructor(){
      this.loadTheme();
  }

  toggleTheme(){
      this.isDark.update(value => !value);
      this.applyTheme();
  }

  loadTheme(){
      const saved =
      localStorage.getItem('theme');
      if(saved === 'light'){
          this.isDark.set(false);
      }
      this.applyTheme();
  }

  applyTheme(){
      const body =
      document.body;
      if(this.isDark()){
          body.classList.remove('light');
          body.classList.add('dark');
          localStorage.setItem(
            'theme',
            'dark'
          );

      }else{

          body.classList.remove('dark');
          body.classList.add('light');
          localStorage.setItem(
            'theme',
            'light'
          );
      }
  }
}