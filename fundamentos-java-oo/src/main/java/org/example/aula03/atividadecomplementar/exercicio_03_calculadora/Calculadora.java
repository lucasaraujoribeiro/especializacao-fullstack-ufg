package org.example.aula03.atividadecomplementar.exercicio_03_calculadora;

public class Calculadora {

    public void adicao(int n1, int n2) {
        try {
            System.out.printf("\nResultado adicao: %d", n1 + n2);
        } catch (Exception e) {
            System.out.printf("\nErro ao somar %d + %d - %s", n1, n2, e.getMessage());
        }
    }

    public void subtracao(int n1, int n2) {
        try {
            System.out.printf("\nResultado subtracao: %d", n1 - n2);

        } catch (Exception e) {
            System.out.printf("\nErro ao subtrair %d - %d - %s", n1, n2, e.getMessage());
        }
    }

    public void multiplicacao(int n1, int n2) {
        try {
            System.out.printf("\nResultado multiplicacao: %d", n1 * n2);
        } catch (Exception e) {
            System.out.printf("\nErro ao multiplicar %d * %d - %s", n1, n2, e.getMessage());
        }
    }

    public void divisao(int n1, int n2) {
        try {
            System.out.printf("\nResultado divisao: %d", n1 / n2);
        } catch (Exception e) {
            System.out.printf("\nErro ao dividr %d / %d - %s", n1, n2, e.getMessage());
        }
    }

}
