package org.example;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class Testes {

    public static void main(String[] args) {

        // Ler um arquivo
        try {
            FileReader fr = new FileReader("arquivo.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Arquivo não encontrado");
        }

    }
}
