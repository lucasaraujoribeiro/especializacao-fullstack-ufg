package org.example.aula03.atividadepratica5;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<LojaShopping> lojas = new ArrayList<>();

        LojaShopping loja1 = new LojaShopping("Ramen Ichiraku ", "11.111.111/0001-11", 1, "Aldeia da Folha", "Ichiraku");
        loja1.registraAberturaDia();
        lojas.add(loja1);
        LojaShopping loja2 = new LojaShopping("Capsule Corporation ", "11.111.111/0001-11", 2, "Capital do Oeste", "Bulma");
        loja2.registraAberturaDia();
        lojas.add(loja2);
        LojaShopping loja3 = new LojaShopping("Kame House", "11.111.111/0001-11", 3, "Ilha", "Kame");
        loja3.registraAberturaDia();
        lojas.add(loja3);

        for (LojaShopping loja: lojas) {
            System.out.println("============================================");
            loja.mostrarDados();
        }

    }

}
