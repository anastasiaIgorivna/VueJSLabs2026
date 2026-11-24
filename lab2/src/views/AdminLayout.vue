<script setup>
import { inject } from 'vue'
import { useRouter, RouterLink, RouterView } from 'vue-router'

const router = useRouter()

const currentUser = inject('currentUser')
const clearUser = inject('clearUser')

function logout() {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('currentUser')

  clearUser()

  router.push('/login')
}
</script>

<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="sidebar-logo">AdminPanel</div>

      <p class="menu-label">ГОЛОВНЕ МЕНЮ</p>

      <nav class="sidebar-nav">
        <RouterLink to="/admin/dashboard">
          <span>▦</span>
          Головна
        </RouterLink>

        <RouterLink to="/admin/users">
          <span>♙</span>
          Користувачі
        </RouterLink>

        <RouterLink to="/admin/reports">
          <span>▤</span>
          Звіти
        </RouterLink>
      </nav>

      <div class="sidebar-bottom">
        <div class="user-info">
          <div class="user-avatar">
            {{ currentUser?.name?.charAt(0).toUpperCase() || 'A' }}
          </div>

          <div>
            <strong>{{ currentUser?.name || 'Адміністратор' }}</strong>
            <small>{{ currentUser?.email || '' }}</small>
          </div>
        </div>

        <button class="logout-button" @click="logout">
          Вийти з акаунта
        </button>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <h2>Панель адміністратора</h2>
        <span>Адміністрування системи</span>
      </header>

      <section class="page-content">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
}

.sidebar {
  width: 250px;
  min-height: 100vh;
  padding: 26px 18px;
  background: #172554;
  color: white;
  display: flex;
  flex-direction: column;
}

.sidebar-logo {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 48px;
}

.menu-label {
  color: #94a3b8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px;
  border-radius: 8px;
  color: #cbd5e1;
  text-decoration: none;
  transition: 0.2s;
}

.sidebar-nav a:hover,
.sidebar-nav a.active-link {
  background: #2563eb;
  color: white;
}

.sidebar-nav span {
  font-size: 19px;
}

.sidebar-bottom {
  margin-top: auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 0;
  border-top: 1px solid #334155;
}

.user-avatar {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #3b82f6;
  font-weight: 700;
}

.user-info strong,
.user-info small {
  display: block;
}

.user-info strong {
  font-size: 13px;
}

.user-info small {
  margin-top: 4px;
  color: #94a3b8;
  font-size: 11px;
  word-break: break-all;
}

.logout-button {
  width: 100%;
  padding: 11px;
  border: 1px solid #475569;
  border-radius: 8px;
  background: transparent;
  color: white;
  cursor: pointer;
}

.logout-button:hover {
  background: #334155;
}

.main-content {
  flex: 1;
  min-width: 0;
}

.topbar {
  min-height: 78px;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid #e2e8f0;
}

.topbar h2 {
  margin: 0;
  font-size: 19px;
  color: #1e293b;
}

.topbar span {
  color: #64748b;
  font-size: 13px;
}

.page-content {
  padding: 32px;
}

@media (max-width: 700px) {
  .admin-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-height: auto;
  }

  .sidebar-logo {
    margin-bottom: 24px;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar-bottom {
    margin-top: 20px;
  }

  .topbar {
    padding: 18px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .page-content {
    padding: 18px;
  }
}
</style>

