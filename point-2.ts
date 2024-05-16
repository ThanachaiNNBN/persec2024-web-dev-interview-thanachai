export class Sort {
    public static ascending(hex: string[]): string[] {
        return hex.sort((a, b) => {
            for (var i = 0; i <= a.length && i <= b.length; i++ ) {
                
    
                if(a.substring(0, i) > b.substring(0, i)) {
                    if(!a.charAt(i)){
                        return -1
                    }
                    return 1;
                }
            }
           return -1
        });
    }

    public static descending(hex: string[]): string[] {
        return hex.sort((a, b) => {
            for (var i = 0; i < a.length; i++) {

                if(a.charAt(i).localeCompare(b.charAt(i)) >= 1 ){
                    if(parseInt(a.substring(i, i+2)) > parseInt(b.substring(i, i+2))){
                        return 1;
                    }else{
                        return -1;
                    }
                }

            }
           return -1;
        });
    }

    
}