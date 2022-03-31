class ThreadNPrimos implements Runnable {
    long primoMin;
    int id;

    ThreadNPrimos(long primoMin, int id){
        this.primoMin = primoMin;
        this.id = id;
    }

    public void run(){

        for(int i = (int)primoMin; i<999999999; i++){
            boolean isPrimo = true;

            for(int j = ((int)primoMin - 1); j>= 2; j--){
                if(i % j == 0){
                    isPrimo = false;
                }
            }

            if(isPrimo) {System.out.println("Thread: " +id +" | " +i+" - Número primo");}

            try {
                Thread.sleep(200);
            } catch (Exception e) {
                //Exceção
            }
        }
    }

    public static void main(String[] args){

        ThreadNPrimos n1 = new ThreadNPrimos(100, 1);
        Thread t1 = new Thread(n1);
        t1.start();

        ThreadNPrimos n2 = new ThreadNPrimos(199, 2);
        Thread t2 = new Thread(n2);
        t2.start();

        ThreadNPrimos n3 = new ThreadNPrimos(110, 3);
        Thread t3 = new Thread(n3);
        t3.start();
    }
}