import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:5050/login', {
          email: this.email,
          password: this.password,
        });
        console.log('Login bem-sucedido!', response.data);
        // Redirecionar o usuário ou armazenar o token, etc.
      } catch (error) {
        this.errorMessage = 'Falha no login. Verifique suas credenciais.';
        console.error('Erro de login:', error);
      }
    },
  },
};