public class ThreadParImpar implements Runnable{
    private int threadN;

    ThreadParImpar(int threadN){
        this.threadN = threadN;
    }

    public static void main(String[] args) {
        Thread eo1 = new Thread(new ThreadParImpar(1)); 
        Thread eo2 = new Thread(new ThreadParImpar(2)); 
        Thread eo3 = new Thread(new ThreadParImpar(3)); 
        Thread eo4 = new Thread(new ThreadParImpar(4)); 


        eo1.start();    
        eo2.start();    
        eo3.start();
        eo4.start();
    }

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            int evenOrOdd = threadN % 2;

            if (evenOrOdd == 1) {
                System.out.println("Thread number " + threadN + " is odd");
            } else {
                System.out.println("Thread number " + threadN + " is even");                
            }

            try {
                Thread.sleep(200);
            } catch (Exception e) {
                //Exceção
            }
        }
    }
}
