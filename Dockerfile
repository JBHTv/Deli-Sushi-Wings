apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: deli-sushi-wings
  namespace: '467849450569'
  selfLink: /apis/serving.knative.dev/v1/namespaces/467849450569/services/deli-sushi-wings
  uid: 066689fb-03ba-4853-9a53-2d7eb538c386
  resourceVersion: AAZAcUAepWs
  generation: 1
  creationTimestamp: '2025-10-05T22:56:46.603644Z'
  labels:
    cloud.googleapis.com/location: northamerica-south1
  annotations:
    run.googleapis.com/client-name: cloud-console
    serving.knative.dev/creator: compostela2007@gmail.com
    serving.knative.dev/lastModifier: compostela2007@gmail.com
    run.googleapis.com/operation-id: 27a40715-e1fe-4c99-9927-082d472b3efb
    run.googleapis.com/ingress: all
    run.googleapis.com/ingress-status: all
    run.googleapis.com/invoker-iam-disabled: 'true'
    run.googleapis.com/urls: '["https://deli-sushi-wings-467849450569.northamerica-south1.run.app","https://deli-sushi-wings-drmtliqopa-pv.a.run.app"]'
spec:
  template:
    metadata:
      labels:
        run.googleapis.com/startupProbeType: Default
      annotations:
        run.googleapis.com/client-name: cloud-console
        autoscaling.knative.dev/maxScale: '3'
        run.googleapis.com/startup-cpu-boost: 'true'
    spec:
      containerConcurrency: 80
      timeoutSeconds: 300
      serviceAccountName: 467849450569-compute@developer.gserviceaccount.com
      containers:
      - name: placeholder-1
        image: gcr.io/cloudrun/placeholder
        ports:
        - name: http1
          containerPort: 8080
        resources:
          limits:
            cpu: 1000m
            memory: 512Mi
        startupProbe:
          timeoutSeconds: 240
          periodSeconds: 240
          failureThreshold: 1
          tcpSocket:
            port: 8080
  traffic:
  - percent: 100
    latestRevision: true
status:
  observedGeneration: 1
  conditions:
  - type: Ready
    status: 'True'
    lastTransitionTime: '2025-10-05T22:56:51.496299Z'
  - type: ConfigurationsReady
    status: 'True'
    lastTransitionTime: '2025-10-05T22:56:50.285245Z'
  - type: RoutesReady
    status: 'True'
    lastTransitionTime: '2025-10-05T22:56:51.474623Z'
  latestReadyRevisionName: deli-sushi-wings-00001-m76
  latestCreatedRevisionName: deli-sushi-wings-00001-m76
  traffic:
  - revisionName: deli-sushi-wings-00001-m76
    percent: 100
    latestRevision: true
  url: https://deli-sushi-wings-drmtliqopa-pv.a.run.app
  address:
    url: https://deli-sushi-wings-drmtliqopa-pv.a.run.app
