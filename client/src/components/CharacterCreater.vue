<template>
  <div class="character-creater">
    <h1>Character Creater</h1>
    <label for="character-name">Character Name: </label>
    <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /><br /><br />
    <label for="professions-list">Character Profession: </label>
    <select id="professions-list" v-model="profession">
        <option value="Mage">Mage</option>
        <option value="Thief">Thief</option>
        <option value="Warrior">Warrior</option>
    </select><br /><br />
    <button v-on:click="post">Create Character</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CharacterCreater',
  data: function() {
      return {
          name: null,
          profession: null
      }
  },
  method: {
    postCharacter: function() {
      axios
      .post('http://localhost:3000/characters', {
        name: this.name,
        profession: this.profession
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
