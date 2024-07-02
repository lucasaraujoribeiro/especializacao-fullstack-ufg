package org.example.aula01.atividadepratica1;

import java.util.Scanner;

public class Aula01Ex04VetorMatriz {

    public static void main(String[] args) {
        // 4 - Ler um vetor (com 5 posições) e uma matriz quadrada (de ordem 5), fazer a soma dos elementos do vetor e multiplicar este resultado por cada elemento da matriz, gerando uma matriz nova, que deverá ser impressa na tela.

        Scanner scan = new Scanner(System.in);
        int somaVetor = 0;
        int[] vetor = new int[5];
        int[][] matriz = new int[5][5];
        int[][] matrizNova = new int[5][5];

        for (int i = 0; i < vetor.length; i++) {
            System.out.printf("\nInforme um numero para posicao [%d] do vetor: ", i);
            vetor[i] = scan.nextInt();
        }

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length;j++) {
                System.out.printf("\nInforme um numero para posicao [%d][%d] da matriz: ", i, j);
                matriz[i][j] = scan.nextInt();
            }
        }

        for (int i = 0; i < vetor.length; i++) {
            somaVetor += vetor[i];
        }
        System.out.println("===================  Resultados  ======================");
        System.out.printf("Soma vetor: %d\n", somaVetor);
        System.out.print("========================================================");
        // Multiplicar a soma do vetor por cada elemento da matriz
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                matrizNova[i][j] = matriz[i][j] * somaVetor;
                System.out.printf("\nMatriz[%d][%d] %d X %d = MatrizNova[%d][%d] %d", i, j, matriz[i][j], somaVetor,i, j, matrizNova[i][j]);
            }
        }

    }
}
