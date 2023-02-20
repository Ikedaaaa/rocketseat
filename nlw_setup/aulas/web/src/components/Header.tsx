import logoImage from '../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import {Plus, X} from 'phosphor-react' //icon lib: https://phosphoricons.com/
import { NewHabitForm } from './NewHabitForm';
//another icon lib: https://fontawesome.com/

// Programação Imperativa Vs Declarativa:
// JS / HTML:
// fazer todos os passos para chegar no resultado;
// Por exemplo pra criar um modal em tela: document.createElement('dialog')...
// React:
//  Cria uma condição e reage a essa condição - Conceito de estado "useState() => alteração por método set...()"; 
// Cria uma informação "const isModalOpen = true;"
// Em algum lugar eu verifico isso e abro o modal, baseado na condição
// Acredito que seja basicamente um "evento" ("onButtonClick")
// Ao invés de dar as instruções de como inserir um modal em tela,
// Eu insiro um modal em tela caso uma condição seja verdadeira

// React não monitora o valor de cada variável para sempre poder fazer alguma coisa de acordo com o valor delas
// Isso seria muito não-performático. Quem fazia isso era o AngularJS => Two-Way Data Binding. Observando todas as variáveis em tempo real
// React usa o conceito de Estado => Variáveis monitoradas, que quando uma variável, que é um Estado, tem o valor alterado, o React recalcula o HTML

export function Header(){
    return (
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logoImage} alt="Habits" />

          <Dialog.Root>
            <Dialog.Trigger type='button' className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'>
              <Plus size={20} className="text-violet-500" />
              Novo hábito
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />

              <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Dialog.Close className='absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900'>
                  <X size={24} aria-label="Fechar"/>
                </Dialog.Close>

                <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                  Criar Hábito
                </Dialog.Title>

                <NewHabitForm />
              </Dialog.Content> 
            </Dialog.Portal>
          </Dialog.Root>
        </div>
    );
}