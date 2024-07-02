package org.example.aula02.atividadepratica3;

public class Main {

    public static void main(String[] args) {

        Edificio edificio = new Edificio("Residencial Java", "Rua java.util, 1");

        Morador morador1 = new Morador("Scanner", "111.111.111-11", "62 9 9999-9999");
        edificio.adicionarApartamento(1, 1,100, "alugado", morador1);

        Morador morador2 = new Morador("ArrayList", "222.222.222-22", "62 9 9999-9999");
        edificio.adicionarApartamento(2, 1,100, "financiado", morador2);

        Morador morador3 = new Morador("Calendar", "333.333.333-33", "62 9 9999-9999");
        edificio.adicionarApartamento(3, 1,100, "quitado", morador3);

        edificio.mostrarDados();

    }

}
