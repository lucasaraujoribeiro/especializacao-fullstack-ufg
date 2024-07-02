package org.example.aula03.atividadecomplementar.exercicio_03_calculadora;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {


        Scanner scan = new Scanner(System.in);

        System.out.printf("\nInforme o primeiro número: ");
        int n1 = scan.nextInt();
        System.out.printf("\nInforme o segundo número: ");
        int n2 = scan.nextInt();

        Calculadora calculadora = new Calculadora();
        System.out.println("\n==============RESULTADOS==============");
        calculadora.adicao(n1, n2);
        calculadora.subtracao(n1, n2);
        calculadora.multiplicacao(n1, n2);
        calculadora.divisao(n1, n2);
        System.out.print("\n");

    }

}
