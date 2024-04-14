import { Component } from '@angular/core'
import { Button1Component } from '../../components/buttons/button1/button1.component'
import { Button2Component } from '../../components/buttons/button2/button2.component'
import { Button3Component } from '../../components/buttons/button3/button3.component'
import { Button4Component } from '../../components/buttons/button4/button4.component'
import { Button5Component } from '../../components/buttons/button5/button5.component'
import { Button6Component } from '../../components/buttons/button6/button6.component'
import { InputFieldComponent } from '../../shared/forms/components/input-field/input-field.component'
import { SelectFieldComponent } from '../../shared/forms/components/select-field/select-field.component'
import { CalendarFieldComponent } from '../../shared/forms/components/calendar-field/calendar-field.component'
import { CalendarComponent } from '../../shared/components/calendar/calendar.component'

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [Button1Component, Button2Component, Button3Component, Button4Component, Button5Component, Button6Component, InputFieldComponent, SelectFieldComponent, CalendarFieldComponent, CalendarComponent],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.css'
})
export class DesignSystemComponent {}
