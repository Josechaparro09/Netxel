<script>

<<<<<<< HEAD
  import { Section, News, HeroHeader, HeroBody , FeatureDefault, FeatureItem} from 'flowbite-svelte-blocks';
  import { Button, DarkMode } from 'flowbite-svelte';
  import { ArrowRightSolid, VideoSolid, ChartSolid, LandmarkSolid, BriefcaseSolid, DollarSolid, RocketSolid, CogOutline } from 'flowbite-svelte-icons';
=======
    import { Section, News, HeroHeader, HeroBody , FeatureDefault, FeatureItem} from 'flowbite-svelte-blocks';
    import { Button, DarkMode } from 'flowbite-svelte';
    import { ArrowRightSolid, VideoSolid, ChartSolid, LandmarkSolid, BriefcaseSolid, DollarSolid, RocketSolid, CogOutline } from 'flowbite-svelte-icons';
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
  import Categories from '../components/Entries/Old table.svelte';
  import Providers from '../components/Entries/Providers.svelte';
  import Employees from '../components/Entries/Employees.svelte';
  import Products from '../components/Entries/Products.svelte';
  import RawMaterials from '../components/Entries/RawMaterials.svelte';



  </script>
  
  <div class="grid place-items-center">
    <Section name="heroDefault">
        <News>
          <a href="/login">
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Ingresa</span>
            <span class="text-sm font-medium">Explora todas las opciones</span>
          </a>
        </News>
        <HeroHeader>
          <svelte:fragment slot="h1">Bienvenido a Netxel</svelte:fragment>
          <svelte:fragment slot="paragraph">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</svelte:fragment>
        </HeroHeader>
      
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="/login">
            <Button class="bg-primary-50 text-white " size="lg"  >
              Iniciar sesion <ArrowRightSolid  size="md" class="ml-2 -mr-1 to-primary-900" />
            </Button>
          </a>
          
        </div>
      </Section>
  </div>
    <Section name="feature">
      <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
        <svelte:fragment slot="h2">Designed for business teams like yours</svelte:fragment>
        <svelte:fragment slot="paragraph">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</svelte:fragment>
      </HeroHeader>
      <FeatureDefault>
        <FeatureItem>
          <svelte:fragment slot="icon"><ChartSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
          <svelte:fragment slot="h3">Marketing</svelte:fragment>
          <svelte:fragment slot="paragraph">Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</svelte:fragment>
        </FeatureItem>
        <FeatureItem>
          <svelte:fragment slot="icon"><LandmarkSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
          <svelte:fragment slot="h3">Legal</svelte:fragment>
          <svelte:fragment slot="paragraph">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</svelte:fragment>
        </FeatureItem>
        <FeatureItem>
          <svelte:fragment slot="icon"><BriefcaseSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
          <svelte:fragment slot="h3">Business Automation</svelte:fragment>
          <svelte:fragment slot="paragraph">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</svelte:fragment>
        </FeatureItem>
        <FeatureItem>
          <svelte:fragment slot="icon"><DollarSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
          <svelte:fragment slot="h3">Finance</svelte:fragment>
          <svelte:fragment slot="paragraph">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</svelte:fragment>
        </FeatureItem>
        <FeatureItem>
          <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
          <svelte:fragment slot="h3">Enterprise Design</svelte:fragment>
          <svelte:fragment slot="paragraph">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</svelte:fragment>
        </FeatureItem>
        <FeatureItem>
          <svelte:fragment slot="icon"><CogOutline class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
          <svelte:fragment slot="h3">Operations</svelte:fragment>
          <svelte:fragment slot="paragraph">Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</svelte:fragment>
        </FeatureItem>
      </FeatureDefault>
    </Section>
    <div class="flex items-center justify-center">
      <Categories/>
      <Providers/>
      <Employees/>
      <RawMaterials/>
      <a href="/dashboard">
        <button class="bg-primary-300">dashboard</button>
      </a>
    </div>