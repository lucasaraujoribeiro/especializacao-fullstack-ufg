package org.example.aula01.atividadepratica1;

import java.util.Scanner;

public class Aula01Ex02CalcularEquacaoSegundoGrau {

    public static void main(String[] args) {
        // 2 - Ler os coeficientes “a”, “b” e “c” de uma equação do segundo grau e calcular os valores de delta e das duas raízes da equação; ao final, imprimir os resultados.
        int a, b, c;
        double delta, raiz1, raiz2;

        Scanner scan = new Scanner(System.in);
        System.out.println("Informe o coeficiente a: ");
        a = scan.nextInt();
        System.out.println("Informe o coeficiente b: ");
        b = scan.nextInt();
        System.out.println("Informe o coeficiente c: ");
        c = scan.nextInt();

        // valor de delta
        delta = (b * b) - (4 * a * c) ;

        // raizes de delta
        int bSinalInvertido = -1 * b;
        if (delta >= 0) {
        double raizDelta = Math.sqrt(delta);
        raiz1 = (bSinalInvertido + raizDelta) / (2 * a);
        raiz2 = (bSinalInvertido - raizDelta) / (2 * a);

            System.out.println("================= Resultados ====================");
            System.out.printf("a = %d, b = %d, c = %d%n", a, b, c);
            System.out.printf("Delta: %f%n", delta);
            System.out.printf("Raiz 1: %f%n", raiz1);
            System.out.printf("Raiz 2: %f%n", raiz2);
        } else {
            System.out.printf("Delta possui valor negativo: %f então não há raízes reais, somente raizes complexas", delta);
        }

    }

}
