<template>
  <table>
    <tbody v-for="(info,index) in data" :key="index">
      <tr>
        <td>{{info.id}}</td>
        <td>{{info.name}}</td>
        <td>{{info.surname}}</td>
        <td>{{info.address}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { id: "1", name: "dd", surname: "ddddd", address: "mrrrw" },
        { id: "2", name: "ddasdads", surname: "dddddf", address: "mrrrd" },
        { id: "3", name: "ddggggg", surname: "dddddq", address: "mrrrs" },
      ],
    };
  },
};
</script>

<style>
</style>