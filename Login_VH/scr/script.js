import axios from 'axios';

export default {
  data() {
    return {
      isClicked: false,
    };
  },
  computed: {
    buttonStyle() {
      return {
        background: this.isClicked ? 'linear-gradient(to right, #7F00FF, #00FF7F)' : '#FFF',
        color: this.isClicked ? '#FFF' : '#000',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
      };
    },
  },
  methods: {
    async handleClick() {
      this.isClicked = true;
      try {
        await axios.post('http://localhost:5050/users', {
          // Add any data you want to send with the request here
        });
        console.log('Request sent successfully!');
      } catch (error) {
        console.error('Error sending request:', error);
      }
    },
  },
};