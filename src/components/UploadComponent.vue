<template>
  <div class="upload-container">
    <div class="upload-area" @click="triggerFileInput" @dragover.prevent @drop.prevent="handleDrop">
      <input 
        type="file" 
        ref="fileInput" 
        @change="handleFileSelect" 
        class="hidden" 
        accept="image/*,video/*"
      >
      <div class="upload-content">
        <svg class="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p class="text-lg text-gray-300 mb-2">Перетащите файлы сюда</p>
        <p class="text-sm text-gray-400">или нажмите для выбора</p>
      </div>
    </div>
    
    <div v-if="selectedFile" class="preview-container mt-4">
      <div class="preview-content">
        <img v-if="isImage" :src="previewUrl" class="max-h-64 rounded-lg" />
        <video v-else-if="isVideo" :src="previewUrl" class="max-h-64 rounded-lg" controls></video>
        <div class="file-info mt-2">
          <p class="text-white">{{ selectedFile.name }}</p>
          <p class="text-gray-400 text-sm">{{ formatFileSize(selectedFile.size) }}</p>
        </div>
        <button 
          @click="processFile" 
          class="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
        >
          Обработать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadComponent',
  data() {
    return {
      selectedFile: null,
      previewUrl: null
    }
  },
  computed: {
    isImage() {
      return this.selectedFile?.type.startsWith('image/')
    },
    isVideo() {
      return this.selectedFile?.type.startsWith('video/')
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileSelect(event) {
      const file = event.target.files[0]
      if (file) {
        this.processSelectedFile(file)
      }
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0]
      if (file) {
        this.processSelectedFile(file)
      }
    },
    processSelectedFile(file) {
      this.selectedFile = file
      this.previewUrl = URL.createObjectURL(file)
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    async processFile() {
      if (!this.selectedFile) return
      
      try {
        // Здесь будет логика обработки файла
        console.log('Начинаем обработку файла:', this.selectedFile.name)
        
        // TODO: Добавить API вызов для обработки файла
        
      } catch (error) {
        console.error('Ошибка при обработке файла:', error)
      }
    }
  }
}
</script>

<style scoped>
.upload-container {
  @apply w-full max-w-2xl mx-auto;
}

.upload-area {
  @apply border-2 border-dashed border-gray-600 rounded-2xl p-8 text-center cursor-pointer hover:border-purple-500 transition-colors duration-300;
}

.upload-content {
  @apply flex flex-col items-center justify-center;
}

.preview-container {
  @apply bg-white/5 backdrop-blur-lg rounded-2xl p-4;
}

.preview-content {
  @apply flex flex-col items-center;
}

.file-info {
  @apply text-center;
}
</style> 