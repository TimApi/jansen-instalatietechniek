<script setup>
import { ref } from "vue";
import axios from "axios";
const submitted = ref(false);
const submitHandler = async (data) => {
  // Let's pretend this is an ajax request:
  console.log(data);
  axios.post(`api/send?email=${data.email}`);
  submitted.value = true;
};
</script>

<template>
  <div class="mt-4">
    <FormKit
      type="form"
      id="registration-example"
      :form-class="submitted ? 'hide' : 'show'"
      submit-label="Register"
      @submit="submitHandler"
      :actions="false"
      #default="{ value }"
    >
      <div class="flex items-center justify-between">
        <FormKit
          type="email"
          name="email"
          outer-class="w-full"
          input-class="p-2 rounded w-full"
          placeholder="joedoe@gmail.com"
          validation="required|email"
        />
        <FormKit
          type="submit"
          input-class="bg-secondary p-2 rounded ml-2"
          label="Verzend"
        />
      </div>
    </FormKit>
    <div v-if="submitted">
      <h2 class="text-xl text-green-500">Submission successful!</h2>
    </div>
  </div>
</template>
