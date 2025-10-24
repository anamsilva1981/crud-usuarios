### CSS Básico

font-weight → define a espessura do texto.

font-size → define o tamanho da fonte.

border → define a borda ao redor do elemento (espessura, tipo e cor).

border-radius → arredonda os cantos da borda.

padding → define o espaçamento interno entre o conteúdo e a borda do elemento.

background-color → define somente a cor de fundo do elemento.

background → propriedade abreviada (shorthand) que pode definir cor, imagem, posição, repetição e tamanho.

transition: all 0.3s linear;

transition → define como mudanças de estilo acontecem de forma animada.

all → aplica a transição a todas as propriedades que mudarem.

0.3s → duração da transição (0,3 segundos).

linear → velocidade constante durante a transição.



### Angular: Recebendo função como Input em um botão
🔹 Componente filho (button.component.ts)
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="handleClick()">{{ textButton }}</button>`
})
export class ButtonComponent {
  @Input() textButton!: string;
  @Input() onClickFn!: () => void; // recebe uma função do pai

  handleClick(): void {
    if (this.onClickFn) {
      this.onClickFn(); // executa a função passada
    } else {
      console.log('Nenhuma função foi passada.');
    }
  }
}


### Componente pai (parent.component.html)
<app-button 
  textButton="Mostrar Alerta" 
  [onClickFn]="mostrarAlerta">
</app-button>

🔹 Componente pai (parent.component.ts)
mostrarAlerta(): void {
  alert('Função do componente pai executada!');
}

Angular: Binding de Inputs

Sem colchetes (textButton="logout") → passa um texto fixo (string literal) direto para o componente filho.

Com colchetes ([textButton]="textoPai") → passa o valor de uma variável do componente pai, que muda dinamicamente se a variável mudar.

### Rotas nativas no angular:
As rotas são definidas no Routes, onde cada objeto indica:
path → URL da rota
component → componente a ser exibido quando a rota for acessada

Exemplo:
const routes: Routes = [
  { path: 'login', component: LoginComponent }
];