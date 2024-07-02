package org.example.aula02.atividadepratica3;

public class Apartamento {

    private int numero;
    private int andar;
    private double metragem;
    private String situacao;
    private Edificio edificio;
    private Morador morador;

    public Apartamento(int numero, int andar, double metragem, String situacao, Edificio edificio, Morador morador) {
        this.numero = numero;
        this.andar = andar;
        this.metragem = metragem;
        this.situacao = situacao;
        this.edificio = edificio;
        this.morador = morador;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getAndar() {
        return andar;
    }

    public void setAndar(int andar) {
        this.andar = andar;
    }

    public double getMetragem() {
        return metragem;
    }

    public void setMetragem(double metragem) {
        this.metragem = metragem;
    }

    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Edificio getEdificio() {
        return edificio;
    }

    public void setEdificio(Edificio edificio) {
        this.edificio = edificio;
    }

    public Morador getMorador() {
        return morador;
    }

    public void setMorador(Morador morador) {
        this.morador = morador;
    }

    @Override
    public String toString() {
        return "Apartamento {" +
                "numero=" + numero +
                ", andar=" + andar +
                ", metragem=" + metragem +
                ", situacao='" + situacao + '\'' +
                ", " + morador.toString() +
                '}';
    }
}
