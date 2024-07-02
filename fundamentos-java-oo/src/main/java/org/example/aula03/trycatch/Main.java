package org.example.aula03.trycatch;

import javax.annotation.processing.FilerException;
import java.io.FileNotFoundException;

public class Main {

    public static void main(String[] args) throws Exception {


        try {
            dividir(5, 0);
        } catch (NullPointerException npe) {
            System.out.println(npe.getClass().getName());
        } catch (Exception e) {
            System.out.println(e.getClass().getName());
        }

    }

    private static int dividir(int a, int b) throws ArithmeticException {
        throw new ArithmeticException("Valor nulo");
//        int resultadoDivisao = 0;
//        if (a == 0 || b == 0) {
//            throw new ArithmeticException("Falha");
//        }


//        return resultadoDivisao;
    }
}
