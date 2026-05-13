import CapabilityCard from '../common/CapabilityCard'
import SectionLabel from '../common/SectionLabel'

import {
  workflowAutomation,
} from '../../data/capabilitiesData'

export default function WorkflowAutomation() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <SectionLabel label="Workflow Automation" />

        <div
          className="
            mt-8
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          <div>
            <h2
              className="
                heading-lg
                max-w-2xl
                font-black
              "
            >
              Reducing manual work through intelligent workflows.
            </h2>
          </div>

          <p
            className="
              text-lg
              leading-9
              text-slate-600
            "
          >
            Intelligent automation systems that replace repetitive
            operations with rule-based and AI-assisted workflows.
          </p>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {workflowAutomation.map((item) => (
            <CapabilityCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}