# Dumbfib

Run with `yarn start`.
Request using query parameters: `http://localhost/?n=10`.
That's it.

On a `t2.micro` instance:

| n   | time (avg) | Peak CPU % |
| --- | ---------- | ---------- |
| 0   | 0.009ms    | ε (< 1%)   |
| 10  | 0.011ms    | ε (< 1%)   |
| 20  | 0.135ms    | ε (< 1%)   |
| 30  | 14.268ms   | 2%         |
| 40  | 1.761s     | 100%       |
| 50  | ∞ (>30s)   | 100%       |

## How to

- Run locally:
  - Launch minikube: `minikube start`
  - Build image and create deployment and service: `make start`
  - Launch the app: `minikube service dumbfib`
  - Develop!
  - ...
  - Delete deployment and service: `make stop`
  - Stop minikube: `minikube stop`

## Notes

- CD depends on https://github.com/GoogleCloudPlatform/cloud-sdk-docker/pull/101 being merged.
