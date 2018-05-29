<script>
import UserDataMenu from './UserDataMenu';
import UserDataSettings from './UserDataSettings';
import NotFoundPage from './NotFoundPage';
import routes from '../routes';

export default {
  name: 'UserData',
  components: {
    UserDataMenu,
    UserDataSettings
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.$root.currentRoute];
      return matchingView || NotFoundPage;
    }
  },
  render() {
    return (
      <div class="user-data">
        <h1>Meus dados cadastrais</h1>
        <div class="cards-desktop">
          <UserDataMenu />
          <UserDataSettings />
        </div>
        <div class="card-mobile">{<this.ViewComponent />}</div>
        <span class="copyright">
          ® 2018 Logox Tecnologia S.A. Todos os direitos reservados.
        </span>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
.user-data {
  padding: 25px 35px;

  @include media('<=phone') {
    padding: 20px 30px 50px;
  }

  .card-mobile {
    @include media('>phone') {
      display: none;
    }
  }

  .cards-desktop {
    display: flex;

    > div:not(:last-of-type) {
      margin-right: 35px;
    }

    @include media('<=phone') {
      display: none;
    }
  }

  .copyright {
    float: right;
    margin: 40px 0;
    color: #535353;
    font-size: 14px;

    @include media('<=phone') {
      display: none;
    }
  }
}
</style>
