package org.example.aula03.atividadepratica5;

public class LojaShopping extends Loja implements Registro {

    private String endereco;
    private String gerente;

    public LojaShopping(String razaoSocial, String CNPJ, int identificador, String endereco, String gerente) {
        super(CNPJ, razaoSocial, identificador);
        this.endereco =  endereco;
        this.gerente = gerente;
    }

    public void mostrarDados() {
        super.mostrarDados();
        System.out.printf("Endereco: %s \n", endereco);
        System.out.printf("Gerente: %s \n", gerente);
    }

    @Override
    public void registraAberturaDia() {
        if (!isAberta()) {
            setAberta(true);
            System.out.println("Abertura da loja realizada com sucesso!");
        } else {
            System.out.println("Abertura não realizada! A loja já está aberta!");
        }
    }

    @Override
    public void registraFechamentoDia() {
        if (isAberta()) {
            setAberta(false);
            System.out.println("Fechamento da loja realizado com sucesso!");
        } else {
            System.out.println("Fechamento não realizado! A loja já está fechada!");
        }
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getGerente() {
        return gerente;
    }

    public void setGerente(String gerente) {
        this.gerente = gerente;
    }
}
