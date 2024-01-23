function Blob() {
  return (
    <>
      <div class="bg-white h-64 flex items-center justify-center px-16">
        <div class="relative w-full max-w-lg">
          <div class="absolute left-16 w-40 h-40 bg-ds-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute right-16 w-40 h-40 bg-ds-green-1 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute left-36 w-40 h-40 bg-ds-green-2 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </>
  );
}

export default Blob;
