package com.projeto.murumuru.models;
import  jakarta.persistence.*;

    @Entity
    @Table(name = "pedreiro")
    public class Pedreiro {

        @Id
        private int id_ped;

        private String nv_ped;

        public int getId_ped() {
            return id_ped;
        }

        public void setId_ped(int id_ped) {
            this.id_ped = id_ped;
        }

        public String getNv_ped() {
            return nv_ped;
        }

        public void setNv_ped(String nv_ped) {
            this.nv_ped = nv_ped;
        }
    }


