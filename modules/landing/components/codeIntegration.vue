<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollAnimations'
import { Terminal, Copy, Check, Code2 } from 'lucide-vue-next'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)

// Langage actif
const activeTab = ref('curl')
const copied = ref(false)

// Exemples de code pour différents langages
const codeSnippets: Record<string, { label: string; language: string; code: string }> = {
  curl: {
    label: 'cURL',
    language: 'bash',
    code: `curl -X POST "https://api.yebapay.com/v1/messages/send" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "recipient": "+242050000000",
    "message": "Bonjour, votre code de validation est 4589."
  }'`
  },
  python: {
    label: 'Python',
    language: 'python',
    code: `import requests

url = "https://api.yebapay.com/v1/messages/send"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "recipient": "+242050000000",
    "message": "Bonjour, votre code de validation est 4589."
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
  },
  node: {
    label: 'Node.js',
    language: 'javascript',
    code: `const axios = require('axios');

async function sendSMS() {
  try {
    const response = await axios.post('https://api.yebapay.com/v1/messages/send', {
      recipient: '+242050000000',
      message: 'Bonjour, votre code de validation est 4589.'
    }, {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendSMS();`
  },
  php: {
    label: 'PHP',
    language: 'php',
    code: `<?php

$ch = curl_init('https://api.yebapay.com/v1/messages/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'recipient' => '+242050000000',
    'message' => 'Bonjour, votre code de validation est 4589.'
]));

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>`
  }
}

const currentCode = computed(() => codeSnippets[activeTab.value].code)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(currentCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Erreur lors de la copie', err)
  }
}
</script>

<template>
  <section ref="sectionRef" class="relative bg-slate-950 py-24 md:py-32 overflow-hidden text-slate-100 border-t border-slate-900">
    
    <!-- Effets de lumière en arrière-plan -->
    <div class="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 relative z-10">
      
      <!-- En-tête de section -->
      <div data-reveal class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-800/50 px-4 py-1.5 rounded-full shadow-lg">
          <Code2 :size="14" />
          Développeurs
        </span>
        <h2 class="mt-6 font-display text-3xl font-extrabold text-white md:text-5xl tracking-tight">
          Intégration simple, API puissante
        </h2>
        <p class="mt-4 text-base md:text-lg text-slate-400 leading-relaxed font-light">
          Quel que soit votre stack technique, intégrez nos services de communication en quelques lignes de code.
        </p>
      </div>

      <!-- Bloc Éditeur de Code / Tabs -->
      <div data-reveal class="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
        
        <!-- Barre supérieure de l'éditeur -->
        <div class="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 gap-4">
          
          <!-- Boutons des langages (Tabs) -->
          <div class="flex items-center gap-2 overflow-x-auto">
            <button
              v-for="(item, key) in codeSnippets"
              :key="key"
              @click="activeTab = String(key)"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer',
                activeTab === key 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              ]"
            >
              {{ item.label }}
            </button>
          </div>

          <!-- Bouton de copie -->
          <button
            @click="copyCode"
            class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            title="Copier le code"
          >
            <Check v-if="copied" :size="14" class="text-emerald-400" />
            <Copy v-else :size="14" />
            <span>{{ copied ? 'Copié !' : 'Copier' }}</span>
          </button>
        </div>

        <!-- Corps du code -->
        <div class="p-6 overflow-x-auto bg-slate-950/70">
          <pre class="font-mono text-xs md:text-sm text-blue-200 leading-relaxed"><code>{{ currentCode }}</code></pre>
        </div>

        <!-- Pied de l'éditeur / info doc -->
        <div class="px-6 py-4 bg-slate-900/50 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-light">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>API v1.0 • Prêt pour la production</span>
          </div>
          <a href="#documentation" class="text-blue-400 hover:underline font-medium">
            Voir la documentation complète &rarr;
          </a>
        </div>

      </div>

    </div>
  </section>
</template>