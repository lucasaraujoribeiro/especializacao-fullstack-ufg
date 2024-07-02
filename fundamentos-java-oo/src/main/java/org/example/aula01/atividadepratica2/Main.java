package org.example.aula01.atividadepratica2;

public class Main {

    public static void main(String[] args) {
        Triangulo t1 = new Triangulo(10, 10, 10); // Equilatero (tres lados iguais)
        Triangulo t2 = new Triangulo(10, 10, 20); // Isosceles (dois lados iguais)
        Triangulo t3 = new Triangulo(10, 20, 30); // Escaleno (tres lados diferentes)

        t1.imprimirTipoTriangulo();
        t2.imprimirTipoTriangulo();
        t3.imprimirTipoTriangulo();
    }

}
