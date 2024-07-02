package org.example.aula02.atividadepratica4.execercicio1;

public class Cargo {

    private String descricao;

    public void mostrarDados() {
        System.out.println("CARGO");
        System.out.println("DESCRICAO: " + descricao);
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
