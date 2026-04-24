import { Route, Switch } from "wouter";
import { RouteScrollRestoration } from "../components/common/RouteScrollRestoration";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AuraClinicPage } from "../pages/businesses/AuraClinicPage";
import { LumaBistroPage } from "../pages/businesses/LumaBistroPage";
import { NexoraPage } from "../pages/businesses/NexoraPage";
import { PulseFitStudioPage } from "../pages/businesses/PulseFitStudioPage";

export default function App() {
  return (
    <>
      <RouteScrollRestoration />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/work/luma-bistro" component={LumaBistroPage} />
        <Route path="/work/pulsefit-studio" component={PulseFitStudioPage} />
        <Route path="/work/aura-clinic" component={AuraClinicPage} />
        <Route path="/work/nexora" component={NexoraPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
