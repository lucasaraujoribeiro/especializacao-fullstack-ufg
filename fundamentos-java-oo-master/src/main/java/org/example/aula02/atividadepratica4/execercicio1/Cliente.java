package org.example.aula02.atividadepratica4.execercicio1;

public class Cliente extends Pessoa {

    private double valorUltimaCompra;

    @Override
    public void mostrarDados() {
        super.mostrarDados();
        System.out.println("VALOR ULTIMA COMPRA: " + valorUltimaCompra);
    }

    public double getValorUltimaCompra() {
        return valorUltimaCompra;
    }

    public void setValorUltimaCompra(double valorUltimaCompra) {
        this.valorUltimaCompra = valorUltimaCompra;
    }
}
