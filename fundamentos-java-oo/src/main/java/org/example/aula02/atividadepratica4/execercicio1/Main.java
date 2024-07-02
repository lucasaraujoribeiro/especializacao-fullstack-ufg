package org.example.aula02.atividadepratica4.execercicio1;

public class Main {
    public static void main(String[] args) {
        System.out.println("========================================");
        Pessoa pessoa = new Pessoa();
        pessoa.setNome("Pessoa");
        pessoa.setCpf("111.111.111-11");
        pessoa.setSexo("Masculino");
        pessoa.setEndereco("xx");
        pessoa.mostrarDados();
        System.out.println("========================================");

        Colaborador colaborador = new Colaborador();
        colaborador.setNome("Colaborador");
        colaborador.setCpf("111.111.111-11");
        colaborador.setSexo("Masculino");
        colaborador.setEndereco("xx");
        Cargo cargo = new Cargo();
        cargo.setDescricao("Desenvolvedor");
        colaborador.setCargo(cargo);
        colaborador.setSalario(10000);
        colaborador.mostrarDados();

        System.out.println("========================================");
        Cliente cliente = new Cliente();
        cliente.setNome("Cliente");
        cliente.setCpf("222.222.222.-22");
        cliente.setEndereco("xx");
        cliente.setSexo("Masculino");
        cliente.setValorUltimaCompra(100.00);
        cliente.mostrarDados();



    }
}
