<template>
    <div>
        <mobile id="mobile"></mobile>
        <desktop id="desktop"></desktop>

    </div>
</template>

<script>
import Vue from 'vue'

export default {
    data() {
        return {
            responsive: false,
            mobile: false,
            desktop: false
        }
    },
    created: function() {
        document.addEventListener('touchstart', function() { }, { capture: true });
        var removeScene = document.getElementById("scene")
        if (removeScene) {
            document.getElementById("scene").remove();
        } else { console.log('') }
    }
}
</script>
<style scoped>
html,
body {
    overflow: hidden !important;
}

#desktop {
    display: block;
    overflow: hidden !important;
}

#mobile {
    display: none;
}

@media (max-width: 1026px) {
    #desktop {
        display: none;
    }
    #mobile {
        display: block;
        overflow: visible !important;
    }
}
</style>