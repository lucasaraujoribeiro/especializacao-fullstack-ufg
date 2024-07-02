package org.example.aula01.atividadepratica1;

import java.util.Scanner;

public class Aula01Ex01CaclularMedia {

    public static void main(String[] args) {
        // 1 - Ler dois números inteiros, calcular a média aritmética e imprimir na tela o resultado.

        Scanner scan = new Scanner(System.in);
        int numero1, numero2;
        float media;

        System.out.println("Informe o primeiro número: ");
        numero1 = scan.nextInt();
        System.out.println("Informe o segundo número: ");
        numero2 = scan.nextInt();

        media = (float) ((numero1 + numero2) / 2.0);

        System.out.println("Media: " + media);

    }
}
