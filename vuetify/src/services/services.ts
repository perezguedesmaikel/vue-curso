export class DataService {
// let url='https://hfp69ilv.directus.app/auth/login'
    async getPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            // Aquí puedes trabajar con los datos obtenidos
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error al obtener los posts:', error);
            throw error;
        }
    }

    async login(username: string, password: string) {
        try {
            const response = await fetch('https://hfp69ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error al obtener la sesión:', error);
            throw error;
        }
    }
}

// Uso de la clase DataService
