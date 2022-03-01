# [React] Como navegar para uma seção do site ao clicar em um botão

Para navegar para uma seção específica da sua página web ao clicar em um botão, você só precisa seguir 3 simples passos.

Primeiramente, defina um identificador único para a seção onde você quer navegar quando clicar em um botão.

No caso, vamos definir um id para a seção "Seja um aluno" do nosso site.

```tsx
export default function BeStudent () {
	return <div className={styles.BeStudent} id={'be-a-student'}>
		{...}
	</div>
}
```

Podemos definir uma constante para esse identificador e exportar junto com o componente, para garantir que sabemos onde ele está sendo usado futuramente.

```tsx
export const BE_A_STUDENT_ID = 'be-a-student';

export default function BeStudent () {
	return <div className={styles.BeStudent} id={BE_A_STUDENT_ID}>
		{...}
	</div>
}
```

Em seguida, no botão que desejamos adicionar essa função, precisamos adicionar um evento de clique, e fazer a referência para uma nova função.

```tsx
export default function MainSlider () {
	function handleCTAClick () {

	}

	return <div className={styles.MainSlider}>
		{...}
		<Button onClick={handleCTAClick}>
			Seja um aluno
		</Button>
	</div>
}
```

Por fim, vamos adicionar a instrução para fazer a janela "scrollar" (ou rolar) para o um ponto específico.

Para essa instrução, vamos usar o método `scrollTo`, disponível na variável global `window` de todos os navegadores.

Precisamos passar dois parâmetros para ele: `top` e `behavior`.

Por enquanto, vamos passar os valores `500` para `top`, e `'smooth'` para `behavior`.

```tsx
export default function MainSlider () {
	function handleCTAClick () {
		window.scrollTo({
			top: 500,
			behavior: 'smooth',
		})
	}

	return <div className={styles.MainSlider}>
		{...}
		<Button onClick={handleCTAClick}>
			Seja um aluno
		</Button>
	</div>
}
```

Note que ao clicar no botão, a tela descerá um pouquinho.

Na verdade, esse pouquinho é exatamente 500 pixels.

Caso a sua tela tenha subido ao invés de descer, significa que o seu botão está localizado abaixo da linha de 500 pixels da página.

Ou seja, essa função faz o rolamento da página para o topo de definirmos.

Então, no nosso caso, podemos usar o topo do nosso elemento "Seja um aluno” como parâmetro.

---

O primeiro passo é recuperar o elemento, usando um seletor por query, por exemplo.

```tsx
import { BE_A_STUDENT_ID } from './BeStudent'

export default function MainSlider () {
	function handleCTAClick () {
		const beStudentBlock = document.querySelector(BE_A_STUDENT_ID);
		window.scrollTo({
			top: 500,
			behavior: 'smooth',
		})
	}

	return <div className={styles.MainSlider}>
		{...}
		<Button onClick={handleCTAClick}>
			Seja um aluno
		</Button>
	</div>
}
```

Como esse elemento pode não existir, precisamos verificar se ele de fato existe antes de tentar buscar qualquer valor dentro dele, para evitar erros em runtime.

E usamos a propriedade `offsetTop` como referência. Essa propriedade diz exatamente qual a distância em pixels do início do elemento até o início da página.

```tsx
import { BE_A_STUDENT_ID } from './BeStudent'

export default function MainSlider () {
	function handleCTAClick () {
		const beStudentBlock = document.querySelector(BE_A_STUDENT_ID);

		if (beStudentBlock) {
			window.scrollTo({
				top: beStudentBlock.offsetTop,
				behavior: 'smooth',
			})
		}
	}

	return <div className={styles.MainSlider}>
		{...}
		<Button onClick={handleCTAClick}>
			Seja um aluno
		</Button>
	</div>
}
```

Caso você esteja usando TypeScript, ele vai acusar um erro sobre a tipagem do elemento. Isso acontece, pois ele não sabe exatamente qual o tipo de elemento a sua query vai retornar.

E, caso ela retorne um SVG, por exemplo, não existirá a propriedade offsetTop gerando um erro no seu código.

Para evitar esse erro, basta você verificar também se o elemento é uma instância de um HTMLElement.

```tsx
import { BE_A_STUDENT_ID } from './BeStudent'

export default function MainSlider () {
	function handleCTAClick () {
		const beStudentBlock = document.querySelector(BE_A_STUDENT_ID);

		if (beStudentBlock && (beStudentBlock instanceof HTMLElement)) {
			window.scrollTo({
				top: beStudentBlock.offsetTop,
				behavior: 'smooth',
			})
		}
	}

	return <div className={styles.MainSlider}>
		{...}
		<Button onClick={handleCTAClick}>
			Seja um aluno
		</Button>
	</div>
}
```

E pronto, tudo funcionando perfeitamente.

---

- YouTube
  Se você gostou da aula, peço que você expresse isso clicando no joinha e também comentando, pois isso ajuda muito.
  E se você quer receber dicas de front-end como esta, recomendo que se inscreva no canal e ative o sininho, assim você ficará por dentro de todos os vídeos aqui da front school.
- Postagem
  Se você gostou do artigo ou se ele te ajudou de alguma maneira, comente e/ou compartilhe com algum amigo. Disseminar o conhecimento sobre front-end é a nossa missão aqui na front school, e com seu apoio podemos alcançar todo o país.
