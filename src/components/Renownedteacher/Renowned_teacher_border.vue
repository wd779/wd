<template>
  <div>
    <div class="Renowned_teacher_border">
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Renowned_teacher_border {
  width: 100%;
  height: 0.23rem;
  display: flex;
}
.Renowned_teacher_border p {
  width: 90%;
  text-indent: 0.1rem;
  color: #595959;
  /* background: #f0f2f5; */
  border-left: 3px solid red;
  margin-left: 10px;
}
</style>